pipeline {
    agent any
    
    tools {
      nodejs 'nodejs'
    }

    
    environment {
        AWS_S3_BUCKET = 'caicanuoc123'
        AWS_REGION = 'ap-northeast-1'  // Update this with your AWS region
        BUILD_DIR = 'build'  // Default build directory for React app
    }

    stages {
        stage('check out') {
            steps {
                git url: "https://github.com/ccna123/profile_change.git", branch: "master"
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'
                }
            }
        }
        stage('Build React App') {
            steps {
                script {
                    // Build the React app
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy to S3') {
            steps {
                script {
                    // Deploy build folder to S3
                    sh '''
                        aws s3 sync $BUILD_DIR/ s3://$AWS_S3_BUCKET/ --delete --region $AWS_REGION
                    '''
                }
            }
        }
    }
}
