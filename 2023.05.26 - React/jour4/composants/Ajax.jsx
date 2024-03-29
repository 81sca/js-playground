import React, { useState, useEffect } from 'react';

function Ajax() {

    const [resultat, setResultat] = useState([]);
    // exécuter le TRAITEMENT 1 SEULE FOIS lors du chargement du composant
    // si tu as un tableau vide en 2ème paramètre
    useEffect( function(){
        fetch("https://restcountries.com/v3.1/all")
            .then(function(reponse){ return reponse.json() })
            .then(function(data){  setTimeout(function() {
                setResultat(data)
            } , 2000) })
    }, []);
    
    /*   useEffect( function(){
        
    }, [text]); // updated  */


    return <div>Ajax
        <pre>{JSON.stringify(resultat , null , "  ")}</pre>
    </div>
    
}

export default Ajax;