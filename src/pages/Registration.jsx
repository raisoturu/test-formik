import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import { Formik, Field } from "formik";
import FieldSelect from "../components/FieldSelect";
import * as Yup from "yup";
const handleSubmit = (values, { setSubmitting }) => {
  //simulating API POST
  setTimeout(() => {
    alert("Data berhasil dikirim" + JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 1000);
};
const Registration = () => {
  const formInit = {
    namaDepan: "",
    namaBelakang: "",
    email: "",
    password: "",
    jenisKelamin: 1,
    kota: "",
    provinsi: "",
  };
  const kotaOptions = [
    { value: "Purwodadi", label: "Purwodadi" },
    { value: "Semarang", label: "Semarang" },
    { value: "Solo", label: "Solo" },
    { value: "Pati", label: "Pati" },
    { value: "Demak", label: "Demak" },
  ];
  const provinsiOptions = [
    { value: "JawaTengah", label: "Jawa Tengah" },
    { value: "JawaBarat", label: "Jawa Barat" },
  ];
  const SignupSchema = Yup.object().shape({
    namaDepan: Yup.string()
      .min(2, "Terlalu pendek")
      .max(50, "Terlalu panjang")
      .required("Tidak boleh kosong"),
    namaBelakang: Yup.string()
      .min(2, "Terlalu pendek")
      .max(50, "Terlalu panjang")
      .required("Tidak boleh kosong"),
    password: Yup.string()
      .min(6, "Terlalu pendek")
      .required("Tidak boleh kosong"),
    kota: Yup.string().required("Tidak boleh kosong"),
    provinsi: Yup.string().required("Tidak boleh kosong"),
    email: Yup.string()
      .email("Email tidak valid")
      .required("Tidak boleh kosong"),
  });
  return (
    <Container className="flex-grow-1 margin-nav">
      <Row className="justify-content-center mt-3 mt-md-5">
        <Col md="8">
          <Card className="border-0 shadow">
            <Card.Body>
              <div className="content-title mb-3">Registrasi</div>
              <Formik
                initialValues={formInit}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            Nama Depan
                            <span className="small text-danger"> *</span>
                          </Form.Label>
                          <Field
                            as={Form.Control}
                            isInvalid={errors.namaDepan}
                            type="text"
                            name="namaDepan"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.namaDepan && errors.namaDepan}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group>
                          <Form.Label>
                            Nama Belakang
                            <span className="small text-danger"> *</span>
                          </Form.Label>
                          <Field
                            as={Form.Control}
                            isInvalid={errors.namaBelakang}
                            type="text"
                            name="namaBelakang"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.namaBelakang && errors.namaBelakang}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group>
                      <Form.Label className="d-block">
                        Jenis Kelamin
                        <span className="small text-danger"> *</span>
                      </Form.Label>
                      <Form.Check
                        type="radio"
                        custom
                        className="d-inline-block mx-2"
                      >
                        <Form.Check.Input
                          type="radio"
                          id="pria"
                          name="jenisKelamin"
                          checked={values.jenisKelamin}
                          values="1"
                          onChange={() => setFieldValue("jenisKelamin", 1)}
                        />
                        <Form.Check.Label className="ml-auto" htmlFor="pria">
                          Pria
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Check
                        type="radio"
                        custom
                        className="d-inline-block mx-2"
                      >
                        <Form.Check.Input
                          type="radio"
                          id="wanita"
                          name="jenisKelamin"
                          checked={!values.jenisKelamin}
                          values="0"
                          onChange={() => setFieldValue("jenisKelamin", 0)}
                        />
                        <Form.Check.Label className="ml-auto" htmlFor="wanita">
                          wanita
                        </Form.Check.Label>
                      </Form.Check>
                      <Form.Control.Feedback type="invalid">
                        {errors.jenisKelamin &&
                          touched.jenisKelamin &&
                          errors.jenisKelamin}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Provinsi<span className="small text-danger"> *</span>
                      </Form.Label>
                      <Field
                        name="provinsi"
                        component={FieldSelect}
                        options={provinsiOptions}
                      />
                      {errors.provinsi && touched.provinsi && (
                        <div className="d-block invalid-feedback">
                          {errors.provinsi && errors.provinsi}
                        </div>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Kota<span className="small text-danger"> *</span>
                      </Form.Label>
                      <Field
                        name="kota"
                        component={FieldSelect}
                        options={kotaOptions}
                      />
                      {errors.kota && touched.kota && (
                        <div className="d-block invalid-feedback">
                          {errors.kota && errors.kota}
                        </div>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Email<span className="small text-danger"> *</span>
                      </Form.Label>
                      <Field
                        as={Form.Control}
                        isInvalid={errors.email}
                        type="email"
                        name="email"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email && touched.email && errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Password<span className="small text-danger"> *</span>
                      </Form.Label>
                      <Field
                        as={Form.Control}
                        isInvalid={errors.password}
                        type="password"
                        name="password"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.password && touched.password && errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Button
                      className="mt-3"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <Spinner animation="grow" size="sm" />
                      ) : (
                        "Submit"
                      )}
                    </Button>
                    <Form.Text className="text-muted">
                      <span className="small text-danger"> *</span> Harus diisi.
                    </Form.Text>
                  </form>
                )}
              </Formik>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
