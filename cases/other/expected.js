var expected = [
    '',
    '',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><plus/><apply><times/><ci>k3</ci><ci>gal</ci></apply><apply><divide/><apply><times/><ci>k1</ci><ci>lac</ci></apply><ci>K_l</ci></apply><apply><divide/><apply><times/><ci>k2</ci><ci>alac</ci></apply><ci>K_a</ci></apply><apply><times/><ci>k44</ci><ci>x1</ci></apply><apply><times/><ci>k44</ci><ci>x2</ci></apply></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><minus/><apply><minus/><apply><plus/><ci>V___1___</ci><ci>V___2___</ci></apply><ci>V___3___</ci></apply><ci>V___4___</ci></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><plus/><cn>10</cn><apply><divide/><ci>K2_H1_D</ci><apply><power/><cn>1</cn><cn>-6.3</cn></apply></apply><apply><divide/><apply><power/><cn >1</cn><cn >-6.3</cn></apply><ci>K2_H2_D</ci></apply></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><plus/><apply><times/><ci>alf_pH_D</ci><apply><plus/><cn>1<sep/>0</cn><apply><divide/><ci>NAD</ci><ci>Kd_NAD_D</ci></apply><apply><divide/><ci>NADH</ci><ci>Kd_NADH_D</ci></apply></apply></apply><apply><times/><ci>bet_pH_D</ci><apply><plus/><apply><divide/><ci>Hol</ci><ci>Kd_Hol_D</ci></apply><apply><divide/><apply><divide/><apply><times/><ci>Hol</ci><ci>NAD</ci></apply><ci>Kd_NAD_Hol_D</ci></apply><ci>Kd_NAD_D</ci></apply></apply></apply><apply><times/><ci>gam_pH_D</ci><apply><plus/><apply><divide/><apply><divide/><apply><times/><ci>NADH</ci><ci>Hal</ci></apply><ci>Kd_Hal_NADH_D</ci></apply><ci>Kd_Hal_D</ci></apply><apply><divide/><ci>Hal</ci><ci>Kd_Hal_D</ci></apply><apply><divide/><apply><divide/><apply><times/><ci>NAD</ci><ci>Hal</ci></apply><ci>Kd_Hal_NAD_D</ci></apply><ci>Kd_Hal_D</ci></apply><apply><divide/><apply><divide/><apply><times/><ci>His</ci><ci>NADH</ci></apply><ci>Kd_NADH_His_D</ci></apply><ci>Kd_NADH_D</ci></apply><apply><divide/><ci>His</ci><ci>Kd_His_D</ci></apply></apply></apply></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><divide/><apply><plus/><cn>1</cn><apply><times/><ci>L_dm</ci><apply><power/><ci>F_dm</ci><apply><minus/><ci>n</ci><cn>1</cn></apply></apply><apply><power/><ci>H_dm</ci><ci>n</ci></apply></apply></apply><apply><plus/><cn>1</cn><apply><times/><ci>L_dm</ci><apply><power/><apply><times/><ci>F_dm</ci><ci>H_dm</ci></apply><ci>n</ci></apply></apply></apply></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><minus/><apply><times/><ci>V___5___</ci><cn>2</cn></apply><ci>V___7___</ci></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><divide/><apply><times/><ci>SDH</ci><apply><minus/><apply><times/><apply><divide/><ci>kf_SDH</ci><apply><plus/><cn>1</cn><apply><divide/><ci>Sal</ci><ci>Ki_Sal_SDH</ci></apply></apply></apply><ci>Suc_SDH</ci><ci>Q_SDH</ci></apply><apply><times/><ci>kr_SDH</ci><ci>Fum_SDH</ci><ci>QH2_SDH</ci></apply></apply></apply><apply><plus/><cn>1</cn><ci>Suc_SDH</ci><apply><divide/><apply><times/><ci>Q_SDH</ci><ci>Km_i_Suc_SDH</ci></apply><ci>Kd_es_Suc_SDH</ci></apply><apply><times/><ci>Suc_SDH</ci><ci>Q_SDH</ci></apply><ci>Fum_SDH</ci><apply><divide/><apply><times/><ci>Km_Fum_SDH</ci><ci>QH2_SDH</ci></apply><ci>Kd_ef_Fum_SDH</ci></apply><apply><times/><ci>Fum_SDH</ci><ci>QH2_SDH</ci></apply></apply></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><divide/><cn>1</cn><ci>v_mix</ci></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><times/><ci>V_1</ci><ci>k2</ci><apply><minus/><ci>A1</ci><ci>A2</ci></apply></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><divide/><ci>t</ci><cn>60</cn></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><divide/><apply><times/><ci>k</ci><apply><minus/><ci>S</ci><ci>X1</ci></apply></apply><apply><plus/><cn>1</cn><apply><divide/><apply><power/><ci>X6</ci><ci>n</ci></apply><apply><power/><ci>Ki</ci><ci>n</ci></apply></apply></apply></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><times/><cn>23</cn><ci>s_4</ci><apply><exp/><apply><times/><ci>d</ci><cn>12</cn></apply></apply></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><times/><ci>rrr</ci><apply><power/><ci>rrr</ci><ci>q</ci></apply></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><times/><cn>45</cn><apply><ci>min2</ci><apply><times/><ci>eee</ci><cn>33</cn></apply><ci>k_1</ci></apply></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><times/><ci>koff</ci><apply><ci>min3</ci><cn>1</cn><ci>fun1</ci><ci>fun2</ci></apply></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><times/><ci>k0</ci><apply><sin/><ci>t</ci></apply></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><ci>sqrt</ci><ci>e</ci><ci>r</ci></apply></math>',
    '<math xmlns="http://www.w3.org/1998/Math/MathML"><apply><abs/><apply><minus/><ci>ppp</ci></apply></apply></math>',
    //'<math xmlns="http://www.w3.org/1998/Math/MathML"></math>',
]; 