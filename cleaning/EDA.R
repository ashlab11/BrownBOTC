library(tidyverse)
library(readxl)
library(xlsx)
library(googlesheets4)

full_spreadsheet <- read_excel("BOTC (New).xlsx")

player_list <- unique(full_spreadsheet$...1) %>% discard(is.na) %>% 
  replace(. == "Jason (Chem)", "Jason") %>%
  replace(. == "Josh (Texas)", "Josh")

games <- full_spreadsheet %>%
  rename(player = ...1) %>%
  pivot_longer(cols = contains("Game"), names_to = 'game_info', values_to = 'full_character') %>%
  filter(!is.na(player)) %>%
  mutate(game_num = str_extract(game_info, "(?<=Game )\\d+"), 
         date = str_extract(game_info, "\\d{2}/\\d{2}/\\d{2}")) %>%
  filter(!is.na(full_character)) 

storytellers <- games %>% 
  filter(full_character == "ST") %>% 
  select(player, full_character, game_num) %>%
  group_by(game_num) %>%
  summarize(ST_1 = first(player), 
            ST_2 = nth(player, 2))

games <- games %>%
  full_join(storytellers, by = c("game_num")) %>%
  select(-game_info) %>%
  mutate(thought = str_extract(full_character, "(?<=\\{).*(?=\\})"))
