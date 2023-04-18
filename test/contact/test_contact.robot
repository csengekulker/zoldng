*** Settings ***
Library    SeleniumLibrary

*** Variables ***

# Elements
${NAME_FIELD} =     input[@id="nameInput"]
${EMAIL_FIELD} =     input[@id="emailInput"]
${SUBJECT_FIELD} =    input[@ID="subjectInput"]
${MESSAGE_FIELD} =    textarea[@id="messageInput"]
${SUBMIT_BUTTON} =     *[@id="msgButton"]
${CLOSE_BUTTON} =     *[@id="dismiss"]

# Input Values
${NAME} =     John Doe
${EMAIL} =    csenge.balogh1214@gmail.com
${SUBJECT} =     Robot Testing
${BODY} =         Hi! It's me, testing this form. Peace

*** Test Cases ***
Navigate To Form
    Open Browser    http://localhost:4200/    Chrome
    Maximize Browser Window
    Page Should Contain    Kapcsolatfelvétel
    Sleep    1s
Write Text Inputs
    Input Text    xpath://${NAME_FIELD}    ${NAME}    True
    Input Text    xpath://${EMAIL_FIELD}    ${EMAIL}    True
    Input Text    xpath://${SUBJECT_FIELD}    ${SUBJECT}    True
    Input Text    xpath://${MESSAGE_FIELD}    ${BODY}    True 
    Sleep    1s
Submit Form
    Set Focus To Element    xpath://${SUBMIT_BUTTON}
    Sleep    3s
    Click Element    xpath://${SUBMIT_BUTTON}
    Sleep    5s
Close Feedback Modal
    Page Should Contain    Hamarosan jelentkezünk.
    Sleep    1s
    Set Focus To Element    xpath://${CLOSE_BUTTON}
    Sleep    3s
    Click Element            xpath://${CLOSE_BUTTON}
    Sleep    3s


