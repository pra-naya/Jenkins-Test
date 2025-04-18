pipeline {
    agent {
      //  docker { image 'node:18-alpine' }
        node {
            label 'ubuntu'
        }
    //agent any
    }
    stages {
        stage('Install') {
            steps {
		sh 'node -v'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }                
        }
        // stage('Start') {
        //     steps {
        //         sh 'npm start'
        //     }                                                                                                                                }  
    }
}
