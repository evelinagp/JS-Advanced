function covertWordsToUppercase(string){

        let result = string.toUpperCase()
          .split(/[\W]+/)
          .filter(w => w.length > 0)
          .join(", ");
        //let result = text.toUpperCase().match(/\w+/g).join(', ');
        console.log(result);
      }