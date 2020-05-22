###Use jisho to look up what jlpt level a particular word is###
import requests

print('Enter \'q\' to quit')

active = True
while active:
    word = input("Which word's JLPT level do you want to look up? ") 
    if word == 'q':
        active = False
    else:
        #Make API call to Jisho
        url = 'https://jisho.org/api/v1/search/words?keyword=' + word

        r = requests.get(url)
        response = r.json() #store response in a variable
        dic_search = response['data']
        my_dict = dic_search[0] #just take 1st word
        jlpt_dict = my_dict['jlpt'] #filters out 1st word's JLPT level

        print(jlpt_dict)
