const messages = {
    fr: {
        "toaster": {
            "success": "Succès",
            "warning": "Attention",
            "error": "Erreur"
        },
        "footer": {
            "about": "Copyright (c) 2021 - Crafted with 🥜 and 💚 by the be ys Cloud Team"
        },
        "create_totp": {
            "use_authenticator": "Utilisez un gestionnaire OTP, comme Google Authenticator, pour enregistrer votre OTP."
        },
        "landing": {
            "info_new_users": "<b>Nouveaux utilisateurs et utilisateurs avec mot de passe expiré :</b> Utilisez la fonctionnalité de réinitialisation de mot de passe.",
            "unlock": "Déverrouiller mon compte",
            "change": "Mettre à jour mon mot de passe",
            "reset": "Réinitialiser mon mot de passe",
            "totp": "Générer un QRCode OTP",
            "disabled_unlock": "Le déverrouillage de compte n'est pas disponible sous OpenLDAP.",
            "load_config": {
                "request_error": "Une erreur est survenue lors de la récupération de la configuration. Certaines fonctions pourraient etre indisponibles.",
            },
            "totp_title": "Gestion du OTP de secours",
            "totp_tooltip": "Le OTP vous permet de générer un identifiant unique, à sauvegarder dans une application telle que Google Authenticator. Ce mécanisme vous permettra de réinitialiser votre mot de passe ou de déverrouiller votre compte sans accès à votre boîte mail.",
            "create_totp": "Créer mon OTP",
            "totp_toaster": {
                "create": "Le code OTP a bien été créé!",
                "creation_error": "Une erreur est survenue en générant le code OTP.",
                "revoke": "Votre TOTP a été révoqué",
                "error_on_revoke": "Une erreur est survenue en révoquant votre OTP.",
            },
            "verify_totp": "Vérifier mon OTP",
            "revoke_modal": {
                "request_sent": "Votre demande a été traitée. Consultez votre boîte mail.",
                "request_error": "Une erreur est survenue lors du traitement de votre demande.",
                "title": "Révoquer mon OTP",
            },
            "unlock_modal": {
                "request_sent": "Votre demande a été traitée. Consultez votre boîte mail.",
                "request_error": "Une erreur est survenue lors du traitement de votre demande.",
                "title": "Déverrouiller un compte"
            },
            "reinitialize_modal": {
                "request_sent": "Votre demande a été traitée. Consultez votre boîte mail.",
                "request_error": "Une erreur est survenue lors du traitement de votre demande.",
                "title": "Réinitialiser un mot de passe"
            },
            "change_modal": {
                "request_sent": "Votre mot de passe a bien été modifié.",
                "request_error": "Une erreur est survenue lors du changement de votre mot de passe. Assurez vous que votre ancien mot de passe est valide, et que le nouveau respect les critères de sécurité du serveur.",
                "title": "Changer votre mot de passe"
            },
        },
        "modal": {
            "cancel": "Annuler",
            "close": "Fermer",
            "send": "Envoyer",
            "respect_password_info": "<b>Rappel</b> : Pensez à respecter les règles de sécurité de votre organisation.",
            "send_email": "Envoyer un email",
            "use_totp": "Utiliser un code OTP",
            "use_password": "Utiliser le mot de passe",
            "input": {
                "username": "Nom d'utilisateur : ",
                "old_password":"Ancien mot de passe : ",
                "totp": "OTP :",
                "new_password":"Nouveau mot de passe : ",
                "new_password_repeat":"Nouveau mot de passe (répétez) : ",
                "password": "Mot de passe :",
                "security_token": "Token de sécurité :"
            }
        },
        "unlock": {
            "ongoing_title": "Déverrouillage du compte en cours...",
            "title": "Déverrouiller un compte",
            "bad_link":"Le lien indiqué n'est pas valide.",
            "unlocked":"Le compte a été déverrouillé",
            "error_on_unlock": "Une erreur est survenue lors du déverrouillage. Retentez dans quelques instants."
        },
        "reinitialize": {
            "reinitialized":"Le mot de passe a bien été réinitialisé.",
            "error_on_reinitialization":"Erreur lors de la réinitialisation du mot de passe.",
            "title": "Réinitialiser un mot de passe"
        },
        "verify_totp": {
            "valid": "Ce code OTP est valide.",
            "invalid": "Ce code OTP est invalide !"
        }
    },
    en: {
        "verify_totp": {
            "valid": "This OTP code is valid.",
            "invalid": "This OTP code is not valid!"
        },
        "create_totp": {
            "use_authenticator": "Use a OTP manager, like Google Authenticator, to save this QRCode."
        },
        "toaster": {
            "success": "Success",
            "warning": "Warning",
            "error": "Error"
        },
        "footer": {
            "about": "Copyright (c) 2021 - Crafted with 🥜 and 💚 by the be ys Cloud Team"
        },
        "landing": {
            "info_new_users": "<b>New and expired users:</b> Please use the password reinitialization procedure.",
            "unlock": "Unlock my account",
            "change": "Update my password",
            "reset": "Reinitialize my password",
            "totp": "Generate a OTP QRCode",
            "disabled_unlock": "Account unlocking is not available for OpenLDAP servers.",
            "load_config": {
                "request_error": "An error occurred while retrieving configuration. Some functions may be unavailable.",
            },
            "totp_toaster": {
                "create": "OTP has been created!",
                "creation_error": "An error occurred while generating OTP.",
                "revoke": "OTP has been revoked",
                "error_on_revoke": "An error occurred while revoking OTP.",
            },
            "totp_title": "OTP backup management",
            "totp_tooltip": "Enable a OTP allows you to reinitialize or unlock your account without using emails.",
            "create_totp": "Create my OTP",
            "verify_totp": "Verify my OTP",
            "revoke_modal": {
                "request_sent": "An email is on the way! Please check your mailbox.",
                "request_error": "Sorry, an error occurred.",
                "title": "Revoke my OTP",
            },
            "unlock_modal": {
                "request_sent": "An email is on the way! Please check your mailbox.",
                "request_error": "Sorry, an error occurred.",
                "title": "Unlock my account"
            },
            "reinitialize_modal": {
                "request_sent": "An email is on the way! Please check your mailbox.",
                "request_error": "Sorry, an error occurred.",
                "title": "Reinitialize my password"
            },
            "change_modal": {
                "request_sent": "You password has been changed.",
                "request_error": "An error occurred. Do you respect the security policy of your organization?",
                "title": "Change my password"
            }
        },
        "modal": {
            "cancel": "Cancel",
            "send": "Send",
            "close": "Fermer",
            "send_email": "Send an email",
            "use_totp": "Use a OTP code",
            "use_password": "Use password",
            "respect_password_info": "<b>Remember</b>: You must respect the policy security enforced by your IT Team.",
            "input": {
                "username": "Username:",
                "totp": "OTP:",
                "old_password":"Old password:",
                "new_password":"New password:",
                "new_password_repeat":"New password (again):",
                "password": "Password:",
                "security_token": "Security Token:"
            }
        },
        "unlock": {
            "ongoing_title": "Unlocking in progress, hold on...",
            "bad_link":"The link is invalid, or has expired.",
            "title": "Unlock an account",
            "unlocked":"The account has been unlocked; you can now log in.",
            "error_on_unlock": "An error occurred while unlocking."
        },
        "reinitialize": {
            "reinitialized":"The password have been reinitialized.",
            "error_on_reinitialization":"An error occurred while reinitializing your password.",
            "title": "Reinitialize a password"
        }
    }
};

export default messages;
