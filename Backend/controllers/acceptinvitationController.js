import { jwtDecode } from "jwt-decode";

export const acceptinvitationController = async (req, res) => {

  try {
    const newpassword = req.body.newpassword;
    const confirmpassword = req.body.confirmpassword;
    const token = req.body.token;
    if (!token) {
        return res.status(400).send({ success: false, message: 'Token is missing' });
      }
    const decodedToken = jwtDecode(token);

    const email = decodedToken.email;
    console.log("the email is", email);
    if (newpassword !== confirmpassword) {
      return res.status(200).send({
        success: false,
        message: "password didn't match",
      });
    }
    if (!newpassword) {
      return res.send("new password is required");
    }
    if (!confirmpassword) {
      return res.send("confirm password is required");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
        sucess: false,
        message: "something went wrong",
        error,
      });
  }
};
