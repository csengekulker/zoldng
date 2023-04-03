*** Settings ***
Library    Selenium2Library

*** Variables ***
# ${BOOKING_BUTTON} = 'xpath://*[@id="bookingBtn"]'
${NAME_INPUT} =     Balogh Csenge
# ${DOB?}
${EMAIL_INPUT} =    csenge.balogh1214@gmail.com
${PHONE_INPUT} =    +36 123 456
${ZIP_INPUT} =      2030
${CITY_INPUT} =     Erd
${ADDRESS_INPUT} =    Budai ut 45.

${NAME_FIELD} =     input[@id="fullName"] 

*** Test Cases ***
Navigate To Form
    Open Browser    http://localhost:4200/    Chrome
    Wait Until Element Is Visible    xpath://*[@id="bookingBtn"]
    Click Element    xpath://*[@id="bookingBtn"]
    Sleep    1s
Select Options
    Wait Until Element Is Visible   xpath://select[@id="chooseService"]
    Sleep     1s
    Select From List By Index    xpath://select[@id="chooseService"]     3
    Sleep    1s
    Select From List By Index     xpath://select[@id="chooseType"]    2
    Sleep    1s
    Select From List By Index    xpath://select[@id="chooseApt"]    2
    Sleep    1s
Text Inputs
    Wait Until Element Is Visible    xpath://input[@id="fullName"]
    # Scroll Element Into View    xpath://input[@id="fullName"]
    Input Text    xpath://${NAME_FIELD}    ${NAME_INPUT}
    # input dob
    Input Text    xpath://input[@id="email"]    ${EMAIL_INPUT}
    Input Text    xpath://input[@id="phone"]    ${PHONE_INPUT}
    Input Text    xpath://input[@id="zipcode"]    ${ZIP_INPUT}
    Input Text    xpath://input[@id="city"]    ${CITY_INPUT}
    Input Text    xpath://input[@id="address"]    ${ADDRESS_INPUT}
    Sleep     3s
    # Scroll Element Into View    locator
    Click Element    xpath://input[@id="accept"]
    Sleep    1s




