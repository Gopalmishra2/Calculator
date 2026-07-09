function handleClick(value)
{
    if(value=="=")
        {
            let result=eval(document.getElementById("input").value);
            document.getElementById("input").value=result;

        }
        else
            
            if(value=="AC")
                    {
                        document.getElementById("input").value=""
                    }
                    else if(value=="DEL")
                        {
                            let oldvalue= document.getElementById("input").value;
                            let newvalue= oldvalue.substring(0,oldvalue.length-1);
                             document.getElementById("input").value=newvalue;
                        }else
                            {
                                 document.getElementById("input").value+=value;
                            }
                    
                        
                    
            
}