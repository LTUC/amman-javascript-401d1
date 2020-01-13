# LAB - React Testing and Deployment

Write Unit and Acceptance tests for your Counter application; Deploy to the cloud

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started
Starter code has been provided for you in the `/lab/starter-code` folder. 

For this assignment, work locally instead of at Code Sandbox, as you'll need to create testing snapshots, build your docs and view the production build files.

Create a new repository for this assignment, copy the starter-code folder contents into it, and run an npm install to get started.

## Requirements

### Write Tests
* Write tests to cover the counter component
  * For Up and Down events
    * Assert state changes properly
    * Assert that state is being transferred to the DOM
    * Assert DOM stability via snapshot testing.
      * i.e. take a snapshot, change the markup/jsx, assert failure.  Put it back to make it all good.
* Add some sleek and amazing styling, different from the previous lab.

### Deploy the application
* Create a new repository for your application at Github and connect your sandbox to it.
* Clone the repo to your local machine
* Make sure that 'aws.yml' and 'build' are in your .gitignore, and then commit your code back to github
* Perform an `npm install`
* Perform an `npm run build`
  * You should now have a fully functional static build in the builds folder
  * You can verify this by running `live-server` from within the build folder
* In your README, Submit all 3 deployed URLs from the below steps as well as your Travis tests and documentation links.
 
#### Netlify
* Setup Netlify to deploy from your master branch

#### AWS S3 Website
* Run the build script `npm run build` for your application
* Do a manual deployment of the `build` folder contents to a new Bucket and Cloud at AWS
* Set the permissions to public
* Enable Static Website Hosting

#### AWS Elastic Beanstalk
* Use the `aws-tools` npm package to create an aws.yml file
* Prepare an automated deployment through Cloud Formation using the `aws.yml` file you've created
* Your App should auto-deploy to AWS Cloudfront.


### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
* Submit links to both deployments at AWS
