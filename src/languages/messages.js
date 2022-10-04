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
        "landing": {
            "info_new_users": "<b>Nouveaux utilisateurs et utilisateurs avec mot de passe expiré :</b> Utilisez la fonctionnalité de réinitialisation de mot de passe.",
            "unlock": "Déverrouiller mon compte",
            "change": "Mettre à jour mon mot de passe",
            "reset": "Réinitialiser mon mot de passe",
            "disabled_unlock": "Le déverrouillage de compte n'est pas disponible sous OpenLDAP.",
            "unlock_modal": {
                "request_sent": "Votre demande a été traitée. Consultez votre boîte mail.",
                "request_error": "Une erreur est survenue lors du traitement de votre demande.",
                "title": "Déverrouiller un compte"
            },
            "reset_modal": {
                "request_sent": "Votre demande a été traitée. Consultez votre boîte mail.",
                "request_error": "Une erreur est survenue lors du traitement de votre demande.",
                "title": "Réinitialiser un mot de passe"
            },
            "change_modal": {
                "request_sent": "Votre mot de passe a bien été modifié.",
                "request_error": "Une erreur est survenue lors du changement de votre mot de passe. Assurez vous que votre ancien mot de passe est valide, et que le nouveau respect les critères de sécurité du serveur.",
                "title": "Changer votre mot de passe"
            }
        },
        "modal": {
            "cancel": "Annuler",
            "send": "Envoyer",
            "respect_password_info": "<b>Rappel</b> : Pensez à respecter les règles de sécurité de votre organisation.",
            "input": {
                "username": "Nom d'utilisateur : ",
                "old_password":"Ancien mot de passe : ",
                "new_password":"Nouveau mot de passe : ",
                "new_password_repeat":"Nouveau mot de passe (répétez) : "
            }
        },
        "unlock": {
            "ongoing_title": "Déverrouillage du compte en cours...",
            "bad_link":"Le lien indiqué n'est pas valide.",
            "unlocked":"Le compte a été déverrouillé",
            "error_on_unlock": "Une erreur est survenue lors du déverrouillage. Retentez dans quelques instants."
        },
        "reinitialize": {
            "reinitialized":"Le mot de passe a bien été réinitialisé.",
            "error_on_reinitialization":"Erreur lors de la réinitialisation du mot de passe.",
            "title": "Réinitialiser un mot de passe"
        }
    },
    en: {
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
            "disabled_unlock": "Account unlocking is not available for OpenLDAP servers.",
            "unlock_modal": {
                "request_sent": "An email is on the way! Please check your mailbox.",
                "request_error": "Sorry, an error occurred.",
                "title": "Unlock my account"
            },
            "reset_modal": {
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
            "respect_password_info": "<b>Remember</b>: You must respect the policy security enforced by your IT Team.",
            "input": {
                "username": "Username:",
                "old_password":"Old password:",
                "new_password":"New password:",
                "new_password_repeat":"New password (again):"
            }
        },
        "unlock": {
            "ongoing_title": "Unlocking in progress, hold on...",
            "bad_link":"The link is invalid, or has expired.",
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