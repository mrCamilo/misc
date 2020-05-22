#Use jisho to look up what jlpt level a particular word is
import requests

print('Enter \'q\' to quit')

active = True
while active:
    word = input("Which word's JLPT level do you want to look up? ") 
    if word == 'q':
        active = False
    else:
        try:
            #Make API Call
            url = 'https://jisho.org/api/v1/search/words?keyword=' + word
            r = requests.get(url)
            response = r.json() #store response in a variable
            dic_search = response['data']
            my_dict = dic_search[0] #just take 1st word
            jlpt_dict = my_dict['jlpt'] #filters out other data for JLPT level

            #Convert list to string using join(), make look nice
            word = ''.join(jlpt_dict)
            word = word.replace("jlpt-n", "N")
            print(f"It's an {word} word.")
        except:
            print("Error. Try again, or press 'q' to quit.")

print("Goodbye.")
