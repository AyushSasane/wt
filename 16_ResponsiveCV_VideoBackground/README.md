# Project: Resume Web Page with Video Background

## Question
**16. Design and develop a responsive web page for your CV using multiple column layouts having a video background. You can make use of Bootstrap as well as jQuery.**

---

## Description

This project involves creating a responsive web page for a CV (Curriculum Vitae) using multiple column layouts with a video background. The design is created using **Bootstrap 4** for layout management, **CSS** for styling, and **JavaScript/jQuery** for additional functionality and smooth scrolling effects.

---

## Features
- **Responsive Design**: The webpage is designed to be fully responsive, adjusting to different screen sizes using **Bootstrap**.
- **Video Background**: The background is a looping video that adjusts to cover the entire screen.
- **Multiple Column Layout**: The content is divided into two columns using Bootstrap's grid system for a clean, organized structure.
- **Info Sections**: Sections for contact information, summary, technical overview, work experience, projects, and education.
- **Smooth Scrolling (optional)**: JavaScript/jQuery is used to enable smooth scrolling if there are any anchor links added for navigation.

---

## Setup Instructions

Follow these steps to set up the project on your local machine.

### Prerequisites
- **Text Editor**: Any code editor like **VS Code**, **Sublime Text**, etc.
- **Browser**: A modern browser such as **Chrome**, **Firefox**, or **Safari**.
- **Internet Access**: To fetch external libraries (Bootstrap, jQuery).

### Steps to Set Up

1. **Clone the Repository or Download the Files**:
    - You can either clone this repository or manually download the files and extract them into your desired directory.
    
    ```bash
    git clone https://github.com/yourusername/resume-webpage.git
    cd resume-webpage
    ```

2. **Directory Structure**:
    The folder structure should look like this:

    ```
    project-folder/
    ├── index.html       (HTML file)
    ├── style.css        (CSS file for styling)
    ├── script.js        (JavaScript/jQuery file)
    └── assets/          (Directory for videos and other media)
        └── background-video.mp4
    ```

3. **Edit the Video**:
    - Place the video file `background-video.mp4` in the `assets/` folder.
    - If you want to use your own video, make sure to update the path in the `index.html` file.

4. **Open `index.html` in Your Browser**:
    - Open `index.html` directly in your browser or use a local server to view the page.
    - To open directly, just double-click on the `index.html` file, and it should open in the default browser.

---

## Technologies Used

- **HTML**: For structure and content.
- **CSS**: For styling the page and background video.
- **Bootstrap 4**: For responsive grid layout.
- **JavaScript/jQuery**: For smooth scrolling and other optional functionalities.
- **Video Background**: An MP4 video used as the background for the page.

---

## Files Explanation

1. **`index.html`**: Contains the structure and content of the webpage.
2. **`style.css`**: Styles the page, including the background video and content boxes.
3. **`script.js`**: Contains optional JavaScript for additional functionality (e.g., smooth scrolling).

---

## Customization

1. **Content**: 
    - Update the text inside `index.html` for the personal information, work experience, projects, etc.
    - Modify the structure if you'd like to add more sections (such as skills or hobbies).

2. **Video**:
    - Replace the video in `assets/background-video.mp4` with your own video if desired.
    
3. **Styling**:
    - Adjust the colors, fonts, and layout in `style.css` to match your personal preferences.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Bootstrap**: For responsive design and grid system.
- **jQuery**: For enabling smooth scrolling (if used).
- **HTML5**: For using video elements and providing rich content.
