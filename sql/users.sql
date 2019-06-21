-- Table: public.users

-- DROP TABLE public.users;

CREATE TABLE public.users
(
    user_first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    user_last_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    password character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(200) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (email)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;