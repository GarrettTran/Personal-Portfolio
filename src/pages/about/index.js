import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
const devopsImages = [
  {
    name: "Docker",
    url: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
  },
  {
    name: "Kubernetes",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
  },
  {
    name: "Jenkins",
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Jenkins_logo.svg",
  },
  {
    name: "Ansible",
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg",
  },
  {
    name: "Terraform",
    url: "https://static-00.iconduck.com/assets.00/terraform-icon-1803x2048-hodrzd3t.png",
  },
  {
    name: "Git",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
  },
  {
    name: "Prometheus",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg",
  },
  {
    name: "Grafana",
    url: "https://cdn.worldvectorlogo.com/logos/grafana.svg",
  },
];


const cloudImages = [
  {
    name: "AWS",
    url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    name: "Google Cloud",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
  },
  {
    name: "Microsoft Azure",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
  }
];



export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        {/* DevOps Technologies Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">DevOps Technologies</h3>
          </Col>
          <Col lg="7">
            <div className="tech-images">
              {devopsImages.map((tech, index) => (
                  <img
                      key={index}
                      src={tech.url}
                      alt={tech.name}
                      className="tech-logo"
                  />
              ))}
            </div>
          </Col>
        </Row>

        {/* Cloud Technologies Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Cloud Technologies</h3>
          </Col>
          <Col lg="7">
            <div className="tech-images">
              {cloudImages.map((cloud, index) => (
                  <img
                      key={index}
                      src={cloud.url}
                      alt={cloud.name}
                      className="tech-logo"
                  />
              ))}
            </div>
          </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );
};
