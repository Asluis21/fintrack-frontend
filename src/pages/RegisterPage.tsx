import { useState } from "react";
import { Box } from "../components/Box";
import { BoxTitle } from "../components/BoxTitle";
import { EmailInput } from "../components/EmailInput";
export function RegisterPage() {

    const titlePage : string = "Create your account";
    const subtitlePage : string = "Create your account";

    const[form, setForm] = useState({email: '', password:''});
    
    return (

        <div className="col-6">
            <Box>
                <form>
                    <BoxTitle 
                        title={titlePage}
                        subtitle={subtitlePage}/>

                    <EmailInput
                        autoFocus={true}
                        inputDisable={false}
                        onChange={email => setForm({...form, email})}
                        value={form.email}
                    />
                </form>
            </Box>

        </div>
    )
}