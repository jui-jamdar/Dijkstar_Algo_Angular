
/*
********************************************************************************************
Contacts: 
 - DevOps Engineer: <Juij@nedbank.co.za> 
********************************************************************************************
*/
// -------------------------------------------------------------------------------------------
//
// The main pipeline section
//
 pipeline {
    agent { label 'master' } 
	
    stages {
        stage('NPM INSTALL') {
			steps {
				sh "npm config set strict-ssl false"
				sh "npm install --registry https://github.com/jui-jamdar/Dijkstar_Algo_Angular.git"
			}
		}

        stage('NPM RUN BUILD') {
			steps {
			   sh "npm run build"
			}
		}
		
        stage('NPM TEST'){
			steps {
			   sh "npm run test"
			}    
        }
    }
}