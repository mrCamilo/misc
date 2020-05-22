#Use jisho to look up what jlpt level a particular word is
import requests

#prettify the API result 
def prettify(a_list):
    a_list[a_list.index('jlpt-n5')] = 'N5'
    a_list[a_list.index('jlpt-n4')] = 'N4'
    a_list[a_list.index('jlpt-n3')] = 'N3'
    a_list[a_list.index('jlpt-n2')] = 'N2'
    a_list[a_list.index('jlpt-n1')] = 'N1'
    return a_list

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
        jlpt_dict = my_dict['jlpt'] #filters out other data for JLPT level

        # prettify API result and print
        prettify(jlpt_dict)
        print(f"It's an {jlpt_dict} word.")

print("Goodbye.")
