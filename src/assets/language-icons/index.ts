import jsIcon from "@/assets/language-icons/JavaScript-logo.png";
import nodeIcon from "@/assets/language-icons/Node.js_logo.svg.png";
import gitIcon from "@/assets/language-icons/git_logo.png";
import htmlIcon from "@/assets/language-icons/HTML5_Logo.png";
import css3Icon from "@/assets/language-icons/css3_logo.png";
import electronIcon from "@/assets/language-icons/electronjs_logo_icon.png";
import mysqlIcon from "@/assets/language-icons/Mysql_logo.png";
import postgresIcon from "@/assets/language-icons/postgres.webp";
import pyIcon from "@/assets/language-icons/Python-Logo.png";
import railsIcon from "@/assets/language-icons/rails.png";
import reactIcon from "@/assets/language-icons/react.png";
import tsIcon from "@/assets/language-icons/Typescript_logo_2020.svg.png";
import vueIcon from "@/assets/language-icons/vue.js_logo.png";
import auth0 from "@/assets/language-icons/auth0_logo.png";
import awsIcon from "@/assets/language-icons/aws_icon.png";
import dockerIcon from "@/assets/language-icons/docker.png";
import fastApiIcon from "@/assets/language-icons/FastAPI_Logo.png";
import oktaIcon from "@/assets/language-icons/okta.png";
import sendgridIcon from "@/assets/language-icons/Sendgrid_logo.png";
import stripeIcon from "@/assets/language-icons/stripe_logo.png";
import graphqlIcon from "@/assets/language-icons/graphql_icon.png";

export interface Logo {
  icon: string;
  alt: string;
}

const logos: Logo[] = [
  {
    icon: jsIcon,
    alt: "javascript",
  },
  {
    icon: reactIcon,
    alt: "react",
  },
  {
    icon: tsIcon,
    alt: "typescript",
  },
  {
    icon: vueIcon,
    alt: "vue",
  },
  {
    icon: graphqlIcon,
    alt: "graphql",
  },
  {
    icon: auth0,
    alt: "auth 0",
  },
  {
    icon: awsIcon,
    alt: "amazon web services",
  },
  {
    icon: dockerIcon,
    alt: "docker",
  },
  {
    icon: nodeIcon,
    alt: "node js",
  },
  {
    icon: gitIcon,
    alt: "git",
  },
  {
    icon: electronIcon,
    alt: "electron",
  },
  {
    icon: mysqlIcon,
    alt: "mysql",
  },
  {
    icon: postgresIcon,
    alt: "postgres",
  },
  {
    icon: pyIcon,
    alt: "javascript",
  },
  {
    icon: railsIcon,
    alt: "javascript",
  },
  {
    icon: oktaIcon,
    alt: "okta",
  },
  {
    icon: sendgridIcon,
    alt: "sendgrid",
  },
  {
    icon: htmlIcon,
    alt: "HTML 5",
  },
  {
    icon: css3Icon,
    alt: "CSS 3",
  },
  {
    icon: fastApiIcon,
    alt: "fast api",
  },
  {
    icon: stripeIcon,
    alt: "stripe",
  },
];

export { logos };
