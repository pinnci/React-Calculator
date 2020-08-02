 import React, {useEffect} from 'react';
 
//Type numbers using NUM Pad
export function KeyCodes(){
  useEffect(()=>{
      document.addEventListener("keyup", function(e) {
        if(e.which === 8){
          document.getElementsByName('c')[0].click();
        }

        if(e.which === 78){
          document.getElementsByName('+/-')[0].click();
        }

        if(e.which === 80){
          document.getElementsByName('%')[0].click();
        }    

        if (e.which === 96 || e.which === 48) {
          document.getElementsByName("0")[0].click();
        }

        if (e.which === 97 || e.which === 49) {
          document.getElementsByName("1")[0].click();
        }

        if (e.which === 98 || e.which === 50) {
          document.getElementsByName("2")[0].click();
        }

        if (e.which === 99 || e.which === 51) {
          document.getElementsByName("3")[0].click();
        }

        if (e.which === 100 || e.which === 52) {
          document.getElementsByName("4")[0].click();
        }

        if (e.which === 101 || e.which === 53) {
          document.getElementsByName("5")[0].click();
        }

        if (e.which === 102 || e.which === 54) {
          document.getElementsByName("6")[0].click();
        }

        if (e.which === 103 || e.which === 55) {
          document.getElementsByName("7")[0].click();
        }

        if (e.which === 104 || e.which === 56) {
          document.getElementsByName("8")[0].click();
        }

        if (e.which === 105 || e.which === 57) {
          document.getElementsByName("9")[0].click();
        }

        if (e.which === 106) {
          document.getElementsByName("x")[0].click();
        }

        if (e.which === 107) {
          document.getElementsByName("+")[0].click();
        }

        if (e.which === 109) {
          document.getElementsByName("-")[0].click();
        }

        if (e.which === 110) {
          document.getElementsByName(".")[0].click();
        }

        if (e.which === 111) {
          document.getElementsByName("/")[0].click();
        }

        if (e.which === 13) {
          document.getElementsByName("=")[0].click();
        }
      });
    },[]);
}