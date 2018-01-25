import nodemailer from 'nodemailer';

const from ='"BGM web" <bgm@bgm.net>';
const to='chiara.pm@gmail.com';

function setup(){
	const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a911c851db2522",
    pass: "3ad83b989d903c"
  }
});
}

export function sendNewCustomerMail (user){
	const transport =setup();
	const email={
		from,
		to,
		subject: 'Nuova anagrafica cliente',
		text:{user}

	}
	transport.sendMail(email);
}
