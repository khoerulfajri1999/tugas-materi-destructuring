// Destructuring Array
const namaBinatang = ['kucing','burung','ular','harimau','singa'];
const [a,b,c,d,e] = namaBinatang;
console.log(a,b,c,d,e);

// Destructuring object
const mahasiswa = {
	nama : 'Khoerul Fajri',
	NIM : '2601125347801',
	TTL : '15 Februari 1999',
	email : 'khoerulfajri1999@gmail.com',
	alamat : {
		jalan : 'delima',
		no : '27',
		desa : 'Panguragan',
		Kabupaten : 'Cirebon'
	}
}
const {nama, NIM, TTL, email, alamat : {jalan, no, desa, Kabupaten}} = mahasiswa
console.log(nama, NIM, TTL, email, jalan, no, desa, Kabupaten);

// Destructuring function
const mahasiswa2 = {
	nama : 'Neni Maryamah',
	NIM : '2601125345567',
	TTL : '29 September 2001',
	email : 'nenimaryamah124@gmail.com',
	alamat : {
		jalan : 'jeruk',
		no : '3',
		desa : 'Arjawinangun',
		Kabupaten : 'Cirebon'
	}
}
function infoMahasiswa2 ({nama, NIM, TTL, email, alamat : {jalan, no, desa, Kabupaten}}){
	console.log(nama, NIM, TTL, email, jalan, no, desa, Kabupaten)
}
infoMahasiswa2(mahasiswa2);

// Menggunakan Alias
const mahasiswa3 = {
	nama : 'Saylendra',
	NIM : '2601125859344',
	TTL : '2 Agustus 2000',
	email : 'saylendra440@gmail.com',
	alamat : {
		jalan : 'mangga',
		no : '56',
		desa : 'Plumbon',
		Kabupaten : 'Cirebon'
	}
}
function infoMahasiswa3 ({nama:f, NIM:g, TTL:h, email:i, alamat : {jalan:j, no:k, desa:l, Kabupaten:m}}){
	console.log(f,g,h,i,j,k,l,m)
}
infoMahasiswa3(mahasiswa3);

// Menggunakan Default value
const mahasiswa4 = {
	nama : 'Putri Arya',
	NIM : '2601125123098',
	TTL : '12 Maret 1999',
	alamat : {
		jalan : 'durian',
		no : '32',
		desa : 'Klangenan',
		Kabupaten : 'Cirebon'
	}
}
function infoMahasiswa4 ({nama, NIM, TTL, email='Belum Punya', alamat : {jalan, no, desa, Kabupaten}}){
	console.log(nama, NIM, TTL, email, jalan, no, desa, Kabupaten)
}
infoMahasiswa4(mahasiswa4);