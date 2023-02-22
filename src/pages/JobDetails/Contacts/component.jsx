import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Contacts = ({ name, address, phone, email, location }) => (
  <div className="details_contacts">
    <h4>{name}</h4>
    <LocationOnIcon className="jobs_location__icon" />
    <span className="details_contacts__location">{address}</span>
    <a href={`tell:${phone}`} className="details_contacts__phone">
      {phone}
    </a>
    <a href={`mailto:${email}`} className="details_contacts__email">
      {email}
    </a>
    <iframe
      title="map"
      src={`https://maps.google.com/maps?q=${location.lat},${location.long}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
    />
  </div>
);