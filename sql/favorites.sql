-- Table: public.favorites

-- DROP TABLE public.favorites;

CREATE TABLE public.favorites
(
    pet_id integer NOT NULL DEFAULT nextval('favorites_pet_id_seq'::regclass),
    pet_api_id character varying(50) COLLATE pg_catalog."default" NOT NULL,
    pet_organation_id character varying(50) COLLATE pg_catalog."default" NOT NULL,
    photo_url character varying(150) COLLATE pg_catalog."default" NOT NULL,
    pet_description character varying(150) COLLATE pg_catalog."default" NOT NULL,
    pet_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT favorites_pkey PRIMARY KEY (pet_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.favorites
    OWNER to postgres;