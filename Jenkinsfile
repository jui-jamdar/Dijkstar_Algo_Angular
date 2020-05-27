
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
pipeline{
 stages{
     stage('GIT PULL'){
        steps{
            git branch: 'master', url {'https://github.com/jui-jamdar/Dijkstar_Algo_Angular.git'}
        } 
     }
     stage('Install node modules'){
         sh "npm install"
     }
     stage('Build'){
         sh 'npm run build'
     }
 }
} 