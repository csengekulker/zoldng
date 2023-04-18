*** Settings ***
Library    Selenium2Library

*** Variables ***

# Elements
${BOOKING_BUTTON} =        *[@id="bookingBtn"]
${NAME_FIELD} =            input[@id="fullName"] 
${DOB_FIELD} =             input[@id="dob"]
${EMAIL_FIELD} =           input[@id="email"]
${PHONE_FIELD} =           input[@id="phone"]
${ZIP_FIELD} =             input[@id="zipcode"]
${CITY_FIELD} =            input[@id="city"]
${ADDRESS_FIELD} =         input[@id="address"]
${CHECKBOX} =              input[@id="accept"]
${SUBMIT_BUTTON} =         *[@id="submitBtn"]
${CLOSE_BUTTON} =          *[id="dismiss"]

# Input Values
${NAME} =                  John Doe
${DOB} =                   01/01/1970
${EMAIL} =                 john.doe@gmail.com
${PHONE} =                 +36 123 456
${ZIP} =                   1111
${CITY} =                  Budapest
${ADDRESS} =               Budapesti út 45.

*** Test Cases ***
Navigate To Form
    Open Browser    http://localhost:4200/    Chrome
    Maximize Browser Window
    Wait Until Element Is Visible    xpath://${BOOKING_BUTTON}
    Click Element    xpath://${BOOKING_BUTTON}
    Sleep    1s
Select Options
    Wait Until Element Is Visible   xpath://select[@id="chooseService"]
    Sleep     1s
    Select From List By Index    xpath://select[@id="chooseService"]     3
    Sleep    1s
    Select From List By Index     xpath://select[@id="chooseType"]    4
    Sleep    1s
# Note: each appointment gets reserved with a passed test, make sure to change number
    Select From List By Index    xpath://select[@id="chooseApt"]    8
    Sleep    1s
Write Text Inputs
    Wait Until Element Is Visible    xpath://${NAME_FIELD}
    Input Text    xpath://${NAME_FIELD}           ${NAME}
    Input Text    xpath://${DOB_FIELD}                  ${DOB}
    Input Text    xpath://${EMAIL_FIELD}          ${EMAIL}
    Input Text    xpath://${PHONE_FIELD}          ${PHONE}
    Input Text    xpath://${ZIP_FIELD}            ${ZIP}
    Input Text    xpath://${CITY_FIELD}           ${CITY}
    Input Text    xpath://${ADDRESS_FIELD}        ${ADDRESS}
    Sleep     3s
Accept Conditions Checkbox
    Set Focus To Element    xpath://${CHECKBOX}
    Click Element           xpath://${CHECKBOX}
    Sleep    2s
Submit Booking Form
    Set Focus To Element    xpath://${SUBMIT_BUTTON}
    Click Element           xpath://${SUBMIT_BUTTON}
    Sleep    3s
Close Feedback Modal
    Page Should Contain    Check your email
    Sleep    1s
    Set Focus To Element    xpath://${CLOSE_BUTTON}
    Sleep    3s
    Click Element            xpath://${CLOSE_BUTTON}
    Sleep    3s 





