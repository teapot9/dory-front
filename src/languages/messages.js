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
            "respect_password_info": "<b>Pensez à respecter les règles du serveur Active Directory</b> : 12 caractères, avec au moins une majuscule, une minuscule, un chiffre, et un caractère spécial.",
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
    }
};

export default messages;