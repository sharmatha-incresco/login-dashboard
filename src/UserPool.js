import { CognitoUserPool } from "amazon-cognito-identity-js";
//import { CognitoUserPool} from "aws-sdk/clients/sagemaker";
const poolData={
    UserPoolId:"eu-north-1_IZkCTImRI",
    ClientId:"38ncc8oubhbdf1re7pketealba"
}
export default new CognitoUserPool(poolData);