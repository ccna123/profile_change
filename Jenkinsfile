pipeline {
    agent any
    
    tools {
        nodejs 'nodejs'
    }

    environment {
        DOCKER_IMAGE = 'thanh1994/profile-change-app'
        DOCKER_TAG = 'latest'
        DOCKER_CREDENTIALS = 'dockerhub-credentials'
        dockerImage = ''
    }

    stages {
        stage('Check Out') {
            steps {
                git url: "https://github.com/ccna123/profile_change.git", branch: "deploy_k8s"
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }
        stage('Build React App') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm run build'
                    } else {
                        bat 'npm run build'
                    }
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    if (isUnix()) {
                        dockerImage = docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                    } else {
                        bat "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                    }
                }
            }
        }
        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    if (isUnix()) {
                        docker.withRegistry('', DOCKER_CREDENTIALS) {
                            dockerImage.push()
                        }
                    } else {
                        withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        bat "docker login -u %DOCKER_USER% -p %DOCKER_PASS%"
                        bat "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
                    }
                    }
                }
            }
        }
        stage('Deploying React.js container to Kubernetes') {
            steps {
                script {
                kubernetesDeploy(configs: "deploy_k8s.yaml")
                }
            }
        }
    }
}
