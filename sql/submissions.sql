-- Table: public.submissions

-- DROP TABLE public.submissions;

CREATE TABLE public.submissions
(
    sub_id integer NOT NULL DEFAULT nextval('submissions_sub_id_seq'::regclass),
    email character varying(200) COLLATE pg_catalog."default" NOT NULL,
    sub_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    sub_description character varying(50) COLLATE pg_catalog."default" NOT NULL,
    sub_type character varying(50) COLLATE pg_catalog."default" NOT NULL,
    sub_photo character varying(150) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT submissions_pkey PRIMARY KEY (sub_id),
    CONSTRAINT submissions_email_fkey FOREIGN KEY (email)
        REFERENCES public.users (email) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.submissions
    OWNER to postgres;