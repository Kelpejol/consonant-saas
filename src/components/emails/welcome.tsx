import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Section,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  name?: string;
}

export const WelcomeEmail = ({
  name = "Founder",
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Consonant - High-performance AI Attribution</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Welcome to Consonant</Heading>
        <Text style={text}>
          Hi {name},
        </Text>
        <Text style={text}>
          Thank you for joining Consonant! You're now ready to start tracking your AI usage with granular precision.
        </Text>
        <Section style={section}>
          <Text style={text}>
            Get started by creating your first API key in the security settings.
          </Text>
          <Link
            href="http://localhost:3000/dashboard/security"
            style={link}
          >
            Go to Security Settings
          </Link>
        </Section>
        <Text style={footer}>
          &copy; 2026 Consonant AI. All rights reserved.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "24px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
};

const text = {
  color: "#1d1c1d",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
};

const section = {
  padding: "16px 0 0",
};

const link = {
  color: "#3b82f6",
  textDecoration: "none",
};

const footer = {
  color: "#b7b7b7",
  fontSize: "12px",
  lineHeight: "24px",
  marginTop: "24px",
};
