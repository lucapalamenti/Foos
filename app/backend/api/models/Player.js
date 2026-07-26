module.exports = class Player {
    /** @type {number} */
    player_id = null;
    /** @type {string} */
    player_firstname = null;
    /** @type {string} */
    player_lastname = null;
    /** @type {string} */
    player_shortname = null;
    /** @type {number} */
    player_elo = null;

    /**
     * Constructor given Player object data
     * @param {Player} data 
     */
    constructor ( data ) {
        this.player_id = data.player_id ? data.player_id : null;
        this.player_firstname = data.player_firstname;
        this.player_lastname = data.player_lastname;
        this.player_shortname = data.player_shortname ? data.player_shortname : "";
        this.player_elo =  data.player_elo ? Number( data.player_elo ) : 2000;
    }
};