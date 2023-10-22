# Tree of Knowledge

![Responsiveness](/documentation/am_i_responsive.jpg/)

This is my website created for my Milestone Project 2 submission as part of my Diploma in Web Development run by Code Institute. The website is an interactive quiz which tests the users knowledge of native British trees and their leaves. The Tree of Knowledge site is currently live, the link can be found [here](https://lharveydev.github.io/tree-of-knowledge/).

The intention of the Tree of Knowledge is as an educational tool with a broad appeal to both younger and older users. The layout is clean and text kept to a minimum. Users can complete the quiz in their own time and are shown whether their answer is correct or not as they go along giving them the opportunity to learn and improve on their score. The results page offers up an encouraging message alongside their score and points users towards learning resources for further study.

There is ample opportunity to expand the website/app to include more quizzes, challenges and interactive puzzles related to wildlife and plants. I could see it being used in an educational setting and the content could be easily adapted to different age groups or levels of ability.

## User Experience (UX)

- ### User stories

- #### First Time Visitor Goals

  1. As a First Time Visitor, I want to be engaged visually and educated.
  2. As a First Time Visitor, I want the purpose and rules of the quiz explained to me.
  3. As a First Time Visitor, I want to locate the organisations social media links to see their followings on social media to determine how trusted and known they are.

- #### Returning Visitor Goals

  1. As a Returning Visitor, I want to retake the quiz and try to improve my score.
  2. As a Returning Visitor, I want to learn something new.
  3. As a Returning Visitor, I want to follow the social media links to find out the latest news.

- #### Frequent User Goals

  1. As a Frequent User, I want to check to see if there are any newly added quizzes.
  2. As a Frequent User, I want to check to see if there are any new social media posts.

- ### Design

- #### Colour Scheme

- [Coolers](https://coolers.co/) was used to pick a harmonious colour palette that reflects the colours found in nature ![colour palette](/documentation/color_palette.png)

- #### Typography

  - I have chosen google fonts 'AmaticSC' font for my title and headings. It has an organic style which reflects the theme of the page and appeals to both younger users and adults. The font used om my answer buttons is 'Barlow' as I needed this to be clearly legible and stand out against the background colour.

- #### Imagery

  - The images I have chosen for the quiz questions are simple, clear and stylized. They just display the individual leaf and are not cluttered by background.
  - The main image of the tree in silhouette came from [Adobe Stock](https://stock.adobe.com/uk/images/tree-with-roots/442695733?prev_url=detail) It is titled 'Tree with Roots' credit to the creator Chanthima Saenubon. I chose this image for its graphic illustrative qualities which I felt were striking. The image also complimented the wild, natural theme to my webpage.

- ### Wireframes

  - Mobile Wireframe - [View](documentation/mobile_version.jpg)
  - Question One Wireframe - [View](documentation/question1.jpg)
  - Question Two Wireframe - [View](documentation/question2.jpg)
  - Question Three Wireframe - [View](documentation/question3.jpg)
  - Question Four Wireframe - [View](documentation/question4.jpg)
  - Question Five Wireframe - [View](documentation/question5.jpg)
  - Results Page Wireframe - [View](documentation/results.jpg)

- ## Features

  - Responsive on all device sizes. Checked via user feedback and the websites [Media Genesis](https://responsivedesignchecker.com/) and [Am I Responsive](https://amiresponsive.co.uk/).

  - Interactive elements. Created using vanilla Javascript.

## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
   - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Hover.css:](https://ianlunn.github.io/Hover/)
   - Hover.css was used on the Social Media icons in the footer to add the float transition while being hovered over.
1. [Google Fonts:](https://fonts.google.com/)
   - Google fonts were used to embed the fonts into the head of my index.html. I chose AmaticSC and Barlow to use throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
   - Font Awesome was used throughout the website to add icons for aesthetic and UX purposes.
1. [I Love IMG:](https://www.iloveimg.com/resize-image)
   - I Love IMG was used to crop and resize all images to enhance performance and increase Lighthouse scores during testing.
1. [Favicon:](https://favicon.io/)
   - Favicon.io was used to create the favicon on the webpage tab.
1. [Balsamiq:](https://balsamiq.com/)
   - Balsamiq was used to create the [wireframes](https://github.com/LHarveyDev/tree-of-knowledge/tree/main/documentation) during the design process.
1. [Git](https://git-scm.com/)
   - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
   - GitHub is used to store the projects code after being pushed from Git.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

- [W3C Markup Validator](https://validator.w3.org/#validate_by_input) - [Results](documentation/html_validation.jpg)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results](documentation/css_validation.jpg)
- [JSHint](https://jshint.com) - [Results](documentation/jshint.jpg)

- Lighthouse Scores performed in Incognito mode.

  ![accessibility](/documentation/lighthouse_scores.jpg)

### Manual and Automated Testing

I made the decision to perform manual testing or Behaviour-Driven development on my website. I tested the logic on different browsers and devices and asked several users to implement manual testing for me as well. I requested feedback on whether the navigation through the website was fluid and intuitive and also on the layout, design and functionality. The expectations and feedback from the User Experience are documented below.

I felt that my project was too small in scale to require automated tests to be designed and deployed. However, I would look to implement TDD in the future if the scope of the project demanded it.

### Testing User Stories from User Experience (UX) Section

- #### First Time Visitor Goals

  1. As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the host.

     1. Upon entering the site, the user is presented with a clean, uncluttered page. The title and main image are displayed above a set of instructions on how to play the game.
     2. The purpose of the quiz and 'how to' guide are kept concise to avoid users having to scroll through a complicated set of instructions.
     3. The user can play the game or explore the social media links at the footer of the page.

  ![UX](/documentation/start_screen.jpg)

  2. As a First Time Visitor, I want to be able to easily navigate throughout the site.

     1. The site has been designed to be fluid and never to entrap the user.
     2. The title 'Tree of Knowledge' is a hyperlink that takes the user back to the start screen from wherever they are in the game.
     3. As the user submits their responses to the questions the colour of the buttons change to reflect whether the answer was correct or incorrect. If the answer selected is correct the button turns to green indicating that the user got this right.

  ![UX](/documentation/correct_answer.jpg)

    If the answer selected is incorrect the button changes to red and the correct answer is highlighted in green. This performs the function of educating the user as they progress through the quiz and giving them an opportunity to improve their score when the quiz restarts.

  ![UX](/documentation/incorrect_answer.jpg)
  
      4. After selecting an answer they are then prompted to navigate to the next question by the appearance of the 'Next' button.
    On completion of the quiz the results screen appears with the users score and a positive message. The user is then prompted to restart the quiz by clicking on the 'Play Again' button or directed towards further learning resources with a link to the Woodland Trust's guide to identifying trees.

  ![UX](/documentation/results_screen.jpg)
  
  1. As a First Time Visitor, I want to locate their social media links to see their following on social media to determine how trusted and known they are.

     1. The user can scroll to the bottom of the page to locate social media links in the footer.

- #### Returning Visitor Goals

  1. As a Returning Visitor, I want to challenge myself more.

     1. I plan to develop the format of the quiz more. This will involve adding more questions and offering a choice of difficulty Easy or Difficult.
     2. I have toyed with the idea of adding a timer so the questions have to be answered within 5 seconds. I haven't done this yet because I see the quiz as a fun, educational tool rather than appealing to the competitive user. However this could be expanded in the future.

  2. As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.

     1. The social media links are displayed in the footer. Whichever link they click, it will open up in a new tab to ensure the user can easily get back to the website.
     2. The results page contains a hyperlink to the Woodland Trust website where users can learn more, this link opens in a new tab for a better user experience.

- #### Frequent User Goals

  1. As a Frequent User, I want to check to see if there are any newly added quizzes or games.

     1. The plan I have is to expand the 'Tree of Knowledge' website to include a range of quizzes and activities related to nature. The home page would allow users to select which 'branch' of knowledge they would like to explore.

  2. As a Frequent User, I want to check to see if there are any new social media posts.

     1. The user would already be comfortable with the website layout and can easily locate the social media links in the footer.
     2. As a Frequent User, I want to sign up to the Newsletter so that I am emailed any major updates and/or changes to the website or organisation.
     3. At the bottom of every page I would like to add a link to subscribe to the organisations newsletter, this would open in a new window.

### Further Testing

- The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop, Samsung Galaxy, iPad air, iPhone 6/7/8 & iPhoneX.
- A large amount of testing was done to ensure that all pages were displaying correctly.
- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs & Fixes

1. Favicon not displaying on deployed site
 Initially I could only get my favicon to display in my workspace and not on my deployed site. After some investigation I realised that the filepath contained a forward slash which when removed allowed the icon to be displayed.
  
2. Results message remaining on screen after game restarted.
I contacted tutor support in relation to this issue. I had tried to alter my resetState, showScore and showQuestion functions in various ways. Initially I changed the display style to 'none' but this prevented the message from displaying at all, I then tried appending and removing the div containing the message but this prevented the game working as it should. Tutor support helped me understand that I needed to amend both the showScore and resetState functions to achieve what I wanted.
  
3. Social Media icons in footer not centred.
I tried to center-align the unordered list horizontally using Bootstrap and CSS. I eventually achieved the look I wanted by adding a margin-right in CSS.

4. Jumping behaviour
Initially when an answer button was selected the 'Next' button would then appear which caused the social media links to jump down and be pushed off screen on mobile devices, when the next question loaded and the 'Next' button was hidden the social media links reappeared. This was visually distracting to the user so I made the footer containing the social media links fixed.

5. Question image not centred vertically on larger screens.
I added a media query for screens above 991px which adds a margin-top in CSS to drop the image down slightly so it is more centrally aligned when viewed on larger screens.

6. Next button on restart retaining background color from results screen.
I added a line in my javascript code functionresetState which returns the 'Next' button background color to its original state.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
   - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.
7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/LHarveyDev/tree-of-knowledge
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

- The Love Math walkthrough from Code Institute was used to create the basic layout for my quiz page. I adapted the code to fit my needs.

- [Coding Ninjas](https://www.codingninjas.com/studio/library/how-to-create-a-javascript-quiz-code): I used this tutorial to help me work out what functions i needed to create to run my quiz.

- [YouTube GreatStack](https://www.youtube.com/watch?v=PBcqGxrr9g8): This video tutorial explained the functions needed for a simple multiple choice quiz and also taught me hot to change the colours of the correct/incorrect answers when selected.

- [Stack Overflow](https://stackoverflow.com/questions/64563792/how-to-have-images-in-a-javascript-quiz): This helped me to work out how to design a quiz where the question is an image.

- [Stack Overflow](https://stackoverflow.com/questions/37252041/storing-quiz-questions-in-array-of-objects): This question explained how to simplify my questions and answers into an array.

- [Freecoder Camp](https://www.freecodecamp.org/news/css-responsive-image-tutorial/#:~:text=To%20make%20an%20image%20responsive>,than%20absolute%20ones%20like%20pixels): Useful article on making sure images are responsive on all devices.

- [Stack Overflow](https://stackoverflow.com/questions/25854496/how-to-set-min-height-for-bootstrap-container#:~:text=container%20class%20is%20defined%20in,the%20height%20of%20a%20container): This post helped me to understand why my leaf-image-container was changing size dependent on the size of the image it contained. I was able to add some CSS to fix the height of the image.

- [Stack Overflow](https://stackoverflow.com/questions/19443013/how-to-center-an-unordered-list): I tried the methods outlined in this post to center my Social Media icons in the footer. I finally solved this by using Google dev tools to pinpoint the element within the list that needed altering. I could then use CSS to alter the margin-left width.

- [W3 Schools](https://www.w3schools.com/howto/howto_css_fixed_footer.asp): This link helped me decide whether I needed a fixed or sticky footer.
  
- Tutor support was used to replace the question image with another image on my results page

- Tutor support was used to help me resolve a problem whereby my score message was appearing at the end of the quiz but was not being removed when the quiz restarted

### Content

- [Woodland Trust](https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/british-trees/a-z-of-british-trees/): A really useful resource for setting my quiz questions and answers.

- All other content was written by the developer.

- Psychological properties of colours text in the README.md was found [here](http://www.colour-affects.co.uk/psychological-properties-of-colours)

### Media

- The main image of the tree in silhouette came from [Adobe Stock](https://stock.adobe.com/uk/images/tree-with-roots/442695733?prev_url=detail) It is titled 'Tree with Roots' credit to the creator Chanthima Saenubon.
- The quiz question images were sourced from various sites and were chosen for their ability to show the leaf in a clear way.

### Acknowledgements

- My Mentor for continuous helpful feedback.

- Tutor support at Code Institute for their support.
