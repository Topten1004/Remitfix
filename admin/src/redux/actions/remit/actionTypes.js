

const ActionTypes = {
    // auth action types
    HexSignIn : "HexSignIn",
    HexSignInError : 'HexSignInError' ,
    HexSignOut : "HexSignOut",

    // user action types
    HexUserList : "HexUserList",
    HexUserListError : "HexUserListError", 

    HexDeleteUser : "HexDeleteUser" ,
    HexDeleteUserError : "HexDeleteUserError" ,

    HexUpdateUserProfile : 'HexUpdateUserProfile',
    HexUpdateUserProfileError : 'HexUpdateUserProfileError',

    HexCreateUserProfile : 'HexCreateUserProfile',
    HexCreateUserProfileError : 'HexCreateUserProfileError' ,
    
    // crypto action types
    HexCryptoList : "HexCyptoList",
    HexCryptoListError : "HexCryptoListError",

    HexAddCrypto : "HexAddCrypto",
    HexAddCryptoError : "HexAddCryptoError",

    HexDeleteCrypto : "HexDeleteCrypto",
    HexDeleteCryptoError : "HexDeleteCryptoError",

    // notification action types
    HexAddNotification : "HexAddNotification",
    HexAddNotificationError : "HexAddNotificationError",

    HexNotificationList : "HexNotificationList",
    HexNotificationListError : "HexNotificationListError",

    HexDeleteNotification : "HexDeleteNotification",
    HexDeleteNotificationError : "HexDeleteNotificationError" ,
}

export default ActionTypes ;