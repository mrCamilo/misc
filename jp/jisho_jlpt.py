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
jlpt_dict = my_dict['jlpt'] #filters out 1st word data for just JLPT level

#format jlpt_dict to make it look better

print(jlpt_dict)

