class UserDataAction {
  static SAVE_USER_DATA = "SAVE_USER_DATA";

  static SAVE_USER_DATA_ACTION = ( UserData ) => {
   return({
       type:this.SAVE_USER_DATA,
       UserData
   })
  }
}
export default UserDataAction