###############################################
# Author: Maggi Keddy                         #
# Date: October 9 2018                        #
# Description: Enhanced Hogwarts Sorting Hat  #
###############################################
import random

def main():
    # input and variables 
    assignedNumber = random.randint(1,4)
    assignedHouse = "unassigned"
    lastName = input("What is your last name? ")


    # processing
    if lastName == "Potter":
        assignedHouse = "Gryffindor"
    elif lastName == "Malfoy":
        assignedHouse = "Sytherin"
    
    else:
        assignedNumber = random.randint(1,8)
        if assignedNumber == 1:
            assignedHouse = "Gryffindor"
        elif assignedNumber == 2:
             assignedHouse = "Slytherin"
        elif assignedNumber == 3:
            assignedHouse = "Hufflepuff"
        elif assignedNumber == 4:
            assignedHouse = "Ravenclaw"
        else:
            assignedHouse = "MUGGLE!"

    # output
    if assignedHouse != "MUGGLE!" :
        print("Hello, Mr./Mrs. {}. You have been assigned to {} house!".format(lastName,assignedHouse))
    else:
        print("What are you doing here? You must go back to platform 9 3/4.")

if __name__ == "__main__":
    main()