import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postDriver, getTeamsList } from "../../redux/actions";

const Create = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const teams = useSelector((state) => state.listTeams).sort(function (a, b) {
    if (a < b) return -1;
    else return 1;
  });

  useEffect(() => {
    dispatch(getTeamsList());
  }, [dispatch]);

  const [errors, setErrors] = useState({});

  const [input, setInput] = React.useState({
    name: "",
    lastName: "",
    description: "",
    image: "",
    nationality: "",
    birthdate: "",
    teamId: "",
  });

  function handleChange(event) {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(validateForm({ ...input, [e.target.name]: e.target.value }));
  }

  function handleSelect(e) {
    setInput({ ...input, teams: [...input.teams, e.target.value] });
  }

  function handleDelete(el) {
    setInput({
      ...input,
      teams: input.teams.filter((temp) => temp !== el),
    });
  }

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const name = e.target.name.value;
  //     const lastName = e.target.lastName.value;
  //     const description = e.target.description.value;
  //     const image = e.target.image.value;
  //     const nationality = e.target.value;
  //     const birthdate = e.target.value;
  //     const teams = e.target.teams.value;
  // }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !errors.name &&
      !errors.lastName &&
      !errors.description &&
      !errors.image &&
      !errors.nationality &&
      !errors.birthdate &&
      !errors.teams
    ) {
      alert("Tu Perro Ha Sido Creado Satisfactoriamente");
      dispatch(postDriver(input));
      setInput({
        name: "",
        lastName: "",
        description: "",
        image: "",
        nationality: "",
        birthdate: "",
        teams: [],
      });
    } else {
      return alert("Something went wrong. Please try again.");
    }
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getTemperamentsList());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h2>Crear Conductor</h2>
        <p>Datos Obligatorios</p>

        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="">Nombre</label>
              <div>
                <input
                  type="text"
                  value={input.name}
                  placeholder="Eje: Diomar"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="">Apellido</label>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="">Descripcion</label>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="">Imagen</label>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="">Nacionalidad</label>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="">Fecha de nacimiento</label>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="">Equipos</label>
              <div>
                <select name="" id=""></select>
              </div>
            </div>
          </div>

          <div className={styles.buttonSection}>
            <Link to="/home">
                <button>Cancel</button>           
            </Link>
                <button  type="submit">Crear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { Link, useHistory } from "react-router-dom";
// import { postDriver, getTeamsList } from '../../redux/actions';

// const Create = () => {

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getTeamsList());
//     }, [dispatch])

//     const team = useSelector((state) => state.getListTeams)

//     const [error, setError ] = useState({})

//     const [input, setInput] = useState({
//         name: '',
//         lastName: '',
//         description: '',
//         image: '',
//         nationality: '',
//         birthdate: '',
//         teams: [],
//     })

//     const [selectState, setSelectState ] = useState([])

//     function handleChange(e){
//         setInput({
//           ...input,
//           [e.target.name]: e.target.value
//         });
//         setError(validar({
//           ...input,
//           [e.target.name]: e.target.value
//         }))
//       }

//       function handleSelect(e){

//         if(input.teams.includes(e.target.value)) return

//         setInput({
//           ...input,
//           teams: [...input.teams, e.target.value]
//         })

//         const selectName = e.target.value;
//         if(selectName === "default") return;
//         setInput({...input , teams:[...input.teams, selectName]})
//         setSelectState([...selectState, team.find(e => e.id === parseInt(selectName))])
//       }

//       function handleSubmit(e){
//         e.preventDefault();
//         if(!error.name && !error.lastname && !error.description &&!error.image && !error.nationality && !error.birthdate && !error.teams) {
//           try {
//             dispatch(postDriver(input))
//             setInput({

//               name: '',
//               lastname: '',
//               description: '',
//               image: '',
//               nationality: '',
//               birthdate: '',
//               teams: []
//             })
//             setSelectState([])
//           } catch (error) {
//             console.log(error)
//           }
//         }
//       }

//     //   function handleDelete(e){
//     //     setInput({...input, teams : input.teams.filter(t => t !== e.target.value)})
//     //     setSelectState(selectState.filter(t => t.id !== parseInt(e.target.value)))
//     //   }

//     return (
//         <div >
//             <div>
//                 <h2>Crear conductor</h2>
//                 <p >Datos con * obligatorios</p>

//                 <form action="">
//                     <div >
//                         <label htmlFor="name">Nombre *</label>
//                         <input type="text"  id="name" name="name" value={input.name} onChange={handleChange} />
//                         {error.name && <p >{error.name}</p>}
//                     </div>
//                     <div >
//                         <label htmlFor="lastname">Apellido *</label>
//                         <input type="text"  id="lastname" name="lastname" value={input.lastname} onChange={handleChange} />
//                         {error.lastname && <p >{error.lastname}</p>}

//                     </div>
//                     <div >
//                         <label htmlFor="description">Descripción *</label>
//                         <input type="text"  id="description" name="description" value={input.description} onChange={handleChange} />
//                         {error.description && <p >{error.description}</p>}
//                     </div>
//                     <div >
//                         <label htmlFor="image">Imagen *</label>
//                         <input type="text"  id="image" name="image" value={input.image} onChange={handleChange} />
//                         {error.image && <p >{error.image}</p>}
//                     </div>
//                     <div >
//                         <label htmlFor="nationality">Nacionalidad *</label>
//                         <input type="text"  id="nationality" name="nationality" value={input.nationality} onChange={handleChange} />
//                         {error.nationality && <p >{error.nationality}</p>}
//                     </div>
//                     <div >
//                         <label htmlFor="birthdate">Fecha de nacimiento *</label>
//                         <input type="date" id="birthdate" name="birthdate" value={input.birthdate} onChange={handleChange} />
//                         {error.birthdate && <p >{error.birthdate}</p>}
//                     </div>
//                     <div >
//                         <label htmlFor="teams">Equipos *</label>
//                         <select id="teams" name="teams" onChange={handleSelect}>
//                             <option value="default">Seleccione un equipo</option>
//                             {/* {team.map (e => <option key={e.id} value={e.id}>{e.name}</option>)} */}
//                             {team && Array.isArray(team) && team.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}

//                         </select>
//                         {error.teams && <p >{error.teams}</p>}
//                     </div>
//                     <div >
//                         <button type="button"  onClick={handleSubmit}>Crear conductor</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//      );
// }

// export default Create;
