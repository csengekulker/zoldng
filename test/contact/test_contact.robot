*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${NAME_FIELD} =     input[@id="nameInput"]
${NAME} =     John Doe
${EMAIL} =    csenge.balogh1214@gmail.com
${SUBJECT} =     Robot Testing
${BODY} =         Hi! It's me, testing this form. Peace

*** Test Cases ***
Navigate To Form
    Open Browser    http://localhost:4200/    Chrome
    Page Should Contain    Kapcsolatfelvétel
    Scroll Element Into View    xpath://${NAME_FIELD}
    Sleep    1s
Write Text Inputs
    # Wait Until Element Is Visible    xpath://${NAME_FIELD}
    Input Text    ${NAME_FIELD}    ${NAME}    True
