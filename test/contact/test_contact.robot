*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${NAME_FIELD} =     input[@id="nameInput"]
${EMAIL_FIELD} =     input[@id="emailInput"]
${SUBJECT_FIELD} =    input[@ID="subjectInput"]
${MESSAGE_FIELD} =    textarea[@id="messageInput"]
${SUBMIT_BUTTON} =     button[@id="msg"]
${x}=        Get Horizontal Position    ${SUBMIT_BUTTON}
${y}=        Get Vertical Position    ${SUBMIT_BUTTON}
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
    # Wait Until Element Is Visible    xpath://${NAME_FIELD}
    Input Text    xpath://${NAME_FIELD}    ${NAME}    True
    Input Text    xpath://${EMAIL_FIELD}    ${EMAIL}    True
    Input Text    xpath://${SUBJECT_FIELD}    ${SUBJECT}    True
    Input Text    xpath://${MESSAGE_FIELD}    ${BODY}    True 
    Sleep    1s
Submit Form
    Run Keyword And Ignore Error    Scroll Element Into View    ${SUBMIT_BUTTON}
    Click Element                xpath://${SUBMIT_BUTTON}
    Sleep    5s
