# cmd open on run adminstrtion ==>>  pip install better_profanity (please install )    

'''
from better_profanity import profanity

if __name__ == "__main__":
    profanity.load_censor_words()

    text = "Bitch"
    censored_text = profanity.censor(text)
    print(censored_text)

# output ==>   ****

------------------------------------------------------------------

from better_profanity import profanity

if __name__ == "__main__":
    dirty_text = "That"

    print(profanity.contains_profanity(dirty_text))


# output ==>  False


'''

from better_profanity import profanity

if __name__ == "__main__":
    dirty_text = "That l3sbi4n did a very good H4ndjob."

    print(profanity.contains_profanity(dirty_text))


# output ==>  # You **** of ****.