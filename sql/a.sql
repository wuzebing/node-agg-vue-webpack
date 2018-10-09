drop table IF EXISTS chart_type_list;
create table IF NOT EXISTS chart_type_list (
	id int NOT NULL AUTO_INCREMENT,
	cname VARCHAR(255) NOT NULL,
	type VARCHAR(255) NOT NULL,
	PRIMARY KEY (id) 
);
insert into chart_type_list (cname,type) values ('线形图','line');
insert into chart_type_list (cname,type)  values ('柱状图','bar');
insert into chart_type_list (cname,type)  values ('扇形图','pie');
insert into chart_type_list (cname,type)  values ('雷达图','radar');
insert into chart_type_list (cname,type)  values ('象线图','scatter');

drop table IF EXISTS chart_config_list;
create table IF NOT EXISTS chart_config_list (
	id int NOT NULL AUTO_INCREMENT,
	cname VARCHAR(255) NOT NULL,
	type VARCHAR(255) NOT NULL,
	chart_options VARCHAR(20000) NOT NULL,
	PRIMARY KEY (id)
);
insert into chart_config_list (cname,type,chart_options) values ('数仓线形图','line','{1}');
insert into chart_config_list (cname,type,chart_options) values ('BI线形图','line','{}');
insert into chart_config_list (cname,type,chart_options)  values ('数仓柱状图','bar','{}');
insert into chart_config_list (cname,type,chart_options)  values ('数仓扇形图','pie','{}');
insert into chart_config_list (cname,type,chart_options)  values ('数仓雷达图','radar','{}');

