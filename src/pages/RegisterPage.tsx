import { useState } from "react";
import { Box } from "../components/Box";
import { BoxTitle } from "../components/BoxTitle";
import { EmailInput } from "../components/EmailInput";
import { PasswordInput } from "../components/PasswordInput";
import { Button } from "../components/Button";
export function RegisterPage() {

    const titlePage : string = "Create your account";
    const subtitlePage : string = "Start tracking your accounts and transactions.";

    const[form, setForm] = useState({email: '', password:'', confirmPassword:''});
    const[loading, setLoading] = useState(false);

    return (

        <div className="container flex-grow-1 d-flex align-items-center">
            <div className="row justify-content-center w-100">
                <div className="col-12 col-sm-7">
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

                            <PasswordInput
                                forgotPassEnabled={false}
                                loading={loading}
                                onChange={password => setForm({...form, password})}
                                placeholder="At least 8 characters"
                                label="Password"
                                value={form.password}
                            />
                            
                            <PasswordInput
                                forgotPassEnabled={false}
                                loading={loading}
                                onChange={confirmPassword => setForm({...form, confirmPassword})}
                                placeholder="Repeat your password"
                                label="Confirm password"
                                value={form.confirmPassword}
                            />

                            <Button
                                loading={loading}
                                maxWith={true}
                                text="Create account"
                                loadingTextMode="Creating account..."
                            />

                            <div className="text-center d-flex gap-1 justify-content-center align-items-center">
                                <small>Already have an account?</small> 
                                <a href="#">Sign up for free</a>
                            </div>
                        </form>
                    </Box>

                </div>
            </div>
        </div>
    )
}