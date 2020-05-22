#Use jisho to look up what jlpt level a particular word is
import requests

#User looks up word
word = input("Which word's JLPT level do you want to look up?") 

#Make API call to Jisho
url = 'https://jisho.org/api/v1/search/words?keyword=' + word

r = requests.get(url)
response = r.json() #store response in a variable
dic_search = response['data']
my_dict = dic_search[0] #just take jlpt of 1st word
jlpt_dict = my_dict['jlpt']

print(f"JLPT Level: {jlpt_dict}")

