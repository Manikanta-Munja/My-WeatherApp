# My-WeatherApp
*COMPANY*:CODETECH IT SOLUTIONS

*NAME*: MANIKANTA MUNJA

*INTERN ID*: CT04XHT

*DOMAIN* : Full Stack Web Development

*DURATION*: 4 WEEKS

*MENTOR*:NEELA SANTOSH

***
I developed a weather application using HTML, CSS, JavaScript, and Bootstrap. The main goal was to fetch real-time weather data from WeatherAPI.com using RapidAPI and display it in a user-friendly interface. I used VS Code as my development environment and tested the app in different browsers to ensure smooth performance. The app allows users to check the weather of any city by entering its name and also displays weather details for a list of predefined cities.

**Setting Up the Structure**  
To build the application, I first set up the basic structure using HTML. The webpage includes an input field for users to enter a city name, a button to fetch weather details, and a table to display weather information for multiple cities. This setup ensures that users can search for any city’s weather while also viewing details for some predefined cities.  

To enhance the design and improve responsiveness, I used Bootstrap. Bootstrap provides pre-designed styles and components, making it easier to create a visually appealing layout. I also added some custom CSS styling to further improve the appearance of the application. The goal was to make the interface simple yet effective, ensuring that users could quickly access the weather information they needed.

 **Fetching Data with JavaScript and API Integration**  
The core functionality of the application was implemented using JavaScript. I wrote a script to fetch data from the WeatherAPI.com API when a user searches for a city. The API returns various weather details such as temperature, humidity, wind direction, and more. I then extracted this data and dynamically updated the webpage using DOM manipulation.  

To ensure smooth data retrieval, I used the `fetch()` method to send a request to the API. The response was then converted to JSON format, making it easier to extract the necessary data. Once the data was retrieved, it was displayed on the webpage by updating the relevant elements. Users could see details such as temperature in Celsius and Fahrenheit, humidity percentage, wind direction, and other important weather parameters.

**Displaying Weather for Multiple Cities**  
One of the key features of the app is that it displays weather details for multiple cities (Bangalore, Chennai, Kolkata, Lucknow, Pune, and Dubai) automatically when the page loads. This was achieved using JavaScript’s `async/await` and `Promise.all()`, which allowed multiple API calls to be made simultaneously.  

To implement this, I created an array of city names and used the `map()` function to call the API for each city. Since making multiple API requests one after another can slow down performance, I used `Promise.all()` to execute them in parallel, reducing the overall load time. The fetched data was then used to populate a table, making it easy for users to compare weather conditions across different locations.

 **Handling and Fixing Issues**  
During development, I faced an issue where some cities were appearing twice in the table. This was caused by multiple calls to update the table without clearing the previous data. As a result, duplicate entries were being added, making the table look cluttered.  

To fix this issue, I ensured that the table content was cleared before adding new data. I modified the JavaScript code to reset the table’s inner HTML before inserting new rows. This simple fix prevented duplicate entries and ensured that the table displayed only the latest weather data.

Another challenge was handling errors when the API request failed. Sometimes, users might enter an invalid city name or there might be network issues. To improve the user experience, I added error handling using `.catch()` in the fetch request. If an error occurred, an alert message was displayed, informing the user that the weather data could not be retrieved.

**Final Outcome and Features**  
After debugging and optimizing the code, the application started working smoothly. The final result is a weather app that provides real-time weather updates in an easy-to-read format. Some of the key features of the app include:  
- **Live Weather Search:** Users can enter any city name to get real-time weather updates.  
- **Predefined Cities Table:** Weather details for multiple cities are displayed automatically when the page loads.  
- **Temperature in Celsius & Fahrenheit:** The app displays temperature values in both Celsius and Fahrenheit for better usability.  
- **Weather Parameters:** Information such as humidity, wind direction, heat index, and dew point is displayed.  
- **Responsive Design:** The interface is mobile-friendly, thanks to Bootstrap styling.  
- **Error Handling:** If an invalid city is entered, the app notifies the user.  

  
Developing this weather app was a great learning experience. It helped me understand how to integrate APIs, work with asynchronous JavaScript, and handle real-time data updates efficiently. I also learned the importance of debugging and optimizing code to ensure smooth performance.  

The final version of the app is functional and visually appealing, providing users with accurate weather details. This project also improved my front-end development skills, particularly in using JavaScript, Bootstrap, and API integration. In the future, I plan to add more features, such as a forecast for the next few days, graphical representations of temperature trends, and user preferences for storing favorite cities.  

Overall, this internship project allowed me to apply my technical knowledge in a practical scenario, and I am excited to keep improving and expanding the app’s functionality.
***
##OUTPUT
![Image](https://github.com/user-attachments/assets/49a6b3c5-e602-4aae-a715-aab1e2fadf40)

