@Library("shared-libs/cnav-pipeline-libs-v2@develop")
import cnav.ptn.*

pipeline {
  agent none

  options {
    timeout(time: 1, unit: 'HOURS')
    disableConcurrentBuilds()
  }

  parameters {
    string(name: 'VERSION', defaultValue: '1.2.0', description: 'Version à déployer')
    booleanParam(name: 'build', defaultValue: false, description: 'Build et publish le SNAPSHOT')
    booleanParam(name: 'integration', defaultValue: false, description: 'Deployer le produit en intégration')
    booleanParam(name: 'production', defaultValue: false, description: 'Deployer le produit en production')
  }

  stages {

    stage('Build'){
      
      agent{
        label 'scn2-int'
      }
      when{
        expression{params.build}
      }
      steps{
        script { 
          cnavDockerBuilder { 
            image = 'scn/ds-rci'
            credentialsId = 'harbor-scn-robot-account' 
            dockerFile = './Dockerfile'
           }
        }
      }
    }
    

    stage('Integration') {
      agent {
        label 'scn2-int'
      }
      when { expression{params.integration} }
      steps {
        sh """
          docker-compose pull
          docker-compose -f v2-docker-compose.yml  up  -d
          """
      }
    }
  }

  post {
    changed {
      script {
        cnavNotif 'franck.colombo@cnav.fr'
      }
    }
  }
}
