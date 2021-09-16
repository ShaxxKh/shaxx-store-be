CREATE TABLE public.products (
	id serial4 NOT NULL,
	title varchar(200) NOT NULL,
	description varchar(1000) NULL,
	price numeric NULL,
	CONSTRAINT products_pkey PRIMARY KEY (id)
);

select * from shaxx_store.public.products

insert into public.products (
	title,
	description,
	price 
)
values(
	'Nike Tiempo Legend 9 Club MG', '1 of our lightest Tiempos to date, the Nike Tiempo Legend 9 Club MG lets you go on the offensive with a low-profile design that`s reinvented for attackers.The upper has raised textures backed by soft foam pods for precise dribbling, passing and shooting, while studs on the bottom provide traction for quick cuts and sudden stops.', 44.95
),(
	'Nike Phantom GT2 Club MG', 'Building off the Phantom GT, the Nike Phantom GT2 Club MG features an updated design and patterning that`s engineered to help you place your shots with pinpoint accuracy.Off-centre lacing provides a clean strike zone to help you dribble, pass and score with precision.', 49.95
),(
	'Nike Mercurial Vapor 14 Club FG/MG', 'The Nike Mercurial Vapor 14 Club FG/MG sets you up for speed with specially designed studs for quick cuts and sudden stops.Grippy texture throughout the upper provides precise control when dribbling at higher speeds.', 38.47
),(
	'Nike Superfly 6 Club MG', 'The Nike Superfly 6 Club MG features a low-profile Dynamic Fit collar and synthetic leather on the upper that wraps your foot for a streamlined fit straight out of the box. A versatile multi-ground plate provides traction on both natural- and artificial-grass pitches.', 41.97
), (
	'Nike Tiempo Legend 9 Academy MG', '1 of our lightest Tiempos to date, the Nike Tiempo Legend 9 Academy MG lets you go on the offensive with a low-profile design that"s reinvented for attackers.', 69.95
),(
	'Nike React Tiempo Legend 9 Pro IC', 'One of our lightest Tiempos to date, the Nike React Tiempo Legend 9 Pro IC lets you go on the offensive with a low-profile design that"s reinvented for attackers.', 99.90
),(
	'Nike Mercurial Vapor 14 Academy FG/MG', 'The Nike Mercurial Vapor 14 Academy FG/MG sets you up for speed with specially designed studs for quick cuts and sudden stops.Grippy texture throughout the flexible upper provides precise control when dribbling at higher speeds.', 72.95
),(
	'Nike Mercurial Superfly 8 Club IC', 'The Nike Mercurial Superfly 8 Club IC sets you up for speed with a seamless fit.Grippy texture on top gives you precise control, while a herringbone pattern on the bottom provides better trapping during small-sided games.', 59.95
),(
	'Nike Tiempo Legend 9 Academy MG', '1 of our lightest Tiempos to date, the Nike Tiempo Legend 9 Academy MG lets you go on the offensive with a low-profile design that"s reinvented for attackers.', 69.95
)

CREATE TABLE public.stocks (
	product_id int4 NULL,
	count int4 NULL
);

ALTER TABLE public.stocks ADD CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES public.products(id);

select * from stocks s 

insert into stocks 
values(6, 1),
(7, 2),
(8, 3),
(9,2),
(10,5),
(11,1),
(12,4),
(13,2),
(14,6)
