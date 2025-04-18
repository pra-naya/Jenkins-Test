pipeline {
    //agent {
      //  docker { image 'node:18-alpine' }
      //  node {
        //    label 'ubuntu'
        //}
    //}
    agent any
    stages {
        stage('Install') {
            steps {
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
                sh 'npm run test'
            }                
        }
        stage('Tranfer and Deploy') {
            steps {
                sh '''
                    scp -P 3022 -r dist package.json package-lock.json ubuntu@172.18.0.1:/home/ubuntu/jenkins-test-deploy
                    ssh -p 3022 ubuntu@172.18.0.1 'cd /home/ubuntu/jenkins-test-deploy && npm install --omit=dev && npx pm2 start dist/index.js --name jenkins-test'
                    '''
            }                                                                                                                                }  
    }
}
